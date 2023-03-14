package com.savante.views.controller.productController;


import com.savante.entities.exception.ProductNotFoundException;
import com.savante.entities.model.DTOS.productDTO.ProductDTO;
import com.savante.service.productService.ProductService;
import com.savante.views.entities.model.productRequest.ProductRequest;
import com.savante.views.entities.model.productResponse.ProductResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
    @Autowired
    private ProductService productService;

   @GetMapping
    public ResponseEntity<List<ProductResponse>> findAll(){
        List<ProductDTO> productDTOList = productService.findAll();
       ModelMapper mapper = new ModelMapper();
        List<ProductResponse> productResponseList = productDTOList.stream()
                .map(productDTO -> mapper.map(productDTO, ProductResponse.class))
                .collect(Collectors.toList());
        return new ResponseEntity<>(productResponseList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<ProductResponse>> findById(@PathVariable Integer id){
      try{
          Optional<ProductDTO> productDTO = productService.findById(id);
          ModelMapper mapper = new ModelMapper();
          ProductResponse productResponse = mapper.map(productDTO.get(), ProductResponse.class);
          return new ResponseEntity<>(Optional.of(productResponse), HttpStatus.OK);
      }
      catch (ProductNotFoundException e){
          return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
      catch (Exception e ){
          return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    @PostMapping
    public ResponseEntity<ProductResponse> add(@RequestBody ProductRequest productRequest){
       try {
           ModelMapper mapper = new ModelMapper();
           ProductDTO productDTO = mapper.map(productRequest, ProductDTO.class);
           productDTO = productService.add(productDTO);
           ProductResponse productResponse = mapper.map(productDTO, ProductResponse.class);
           return new ResponseEntity<>(productResponse, HttpStatus.OK);
       }
       catch (ProductNotFoundException e){
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       }
       catch (Exception e){
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductResponse> update(@RequestBody ProductRequest productRequest,
                                                  @PathVariable Integer id){
       try{
           ModelMapper mapper = new ModelMapper();
           ProductDTO productDTO = mapper.map(productRequest, ProductDTO.class);
           productDTO = productService.update(id, productDTO);
           ProductResponse productResponse = mapper.map(productDTO, ProductResponse.class);
           return new ResponseEntity<>(productResponse, HttpStatus.OK);
       }
       catch (ProductNotFoundException e){
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       }
       catch (Exception e){
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Integer id){
       try{
           productService.deleteById(id);
           return new ResponseEntity<>(HttpStatus.OK);
       }
       catch (ProductNotFoundException e ){
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       }
       catch (Exception e ){
           return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }

}
