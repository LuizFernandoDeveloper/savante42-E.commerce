package com.savante.service.productService;

import com.savante.entities.exception.ProductNotFoundException;
import com.savante.entities.model.DAOS.productDAO.ProductDAO;
import com.savante.entities.model.DTOS.productDTO.ProductDTO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.savante.repository.productRepository.ProductRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository  productRepository;

    /**
     * return a list of product objects.
     * @return list with objects products.
     * **/
    @Transactional(readOnly = true)
    public List<ProductDTO> findAll(){
       Optional< List<ProductDAO>> productDAO = Optional.of(productRepository.findAll());
       if (productDAO.isEmpty()){
           throw new ProductNotFoundException("não tem produtos");
       }
        return productDAO.stream().map(product -> new ModelMapper()
                .map(productDAO, ProductDTO.class)).collect(Collectors.toList());
    }

    /**
     * Return a product by id.
     * @param id  Using to find search product object.
     * @return Optional with product object.
     * **/
    @Transactional(readOnly = true)
    public Optional<ProductDTO>  findById(Integer id){
        Optional<ProductDAO> productDAO = productRepository.findById(id);
        if(productDAO.isEmpty()){
            throw new ProductNotFoundException("Product with id:" + id + " Not found");
        }
        ProductDTO productDTO =  new ModelMapper().map(productDAO.get(), ProductDTO.class);
        return  Optional.of(productDTO);
    }

    /**
     * he adds object product in database.
     * @param productDTO  Using to update object existing in database.
     * @return A object DTO.
     * **/
    @Transactional
    public ProductDTO add(ProductDTO productDTO){
        productDTO.setId(null);
        ModelMapper mapper = new ModelMapper();
        ProductDAO productDAO = mapper.map(productDTO, ProductDAO.class);
        productDAO  = productRepository.save(productDAO);
        productDTO.setId(productDAO.getId());
        return productDTO;
    }

    /**
     * Delete object product using given id.
     * @param id Using to find search product object.
     * **/
    @Transactional
    public void deleteById(Integer id){
        Optional<ProductDAO>  productDAO = productRepository. findById(id);
        if (productDAO.isEmpty()){
            throw new ProductNotFoundException("Product with id: " + id + " Not found");
        }
        productRepository.deleteById(id);
    }

    /**
     *Update the object existing in database.
     * @param id Using with exclude parameter.
     * @param productDTO Object to update the database.
     * **/
    @Transactional
    public ProductDTO update(Integer id, ProductDTO productDTO){
        productDTO.setId(id);
        deleteById(id);
        ModelMapper mapper = new ModelMapper();
        ProductDAO productDAO = mapper.map(productDTO, ProductDAO.class);
        productRepository.save(productDAO);
        return productDTO;
    }
}
