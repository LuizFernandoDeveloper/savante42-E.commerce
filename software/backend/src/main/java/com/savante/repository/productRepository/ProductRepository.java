package com.savante.repository.productRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.savante.entities.model.DAOS.productDAO.ProductDAO;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository  extends JpaRepository<ProductDAO, Integer> {
    
}
