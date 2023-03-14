package com.savante.entities.model.DAOS.productDAO ;


import jakarta.persistence.*;

@Entity
@Table(name = "tb_products")
public class ProductDAO {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column( nullable = false)
    private String urlImage;

    @Column( nullable = false)
    private String name;

    @Column( nullable = false)
    private String description;

    @Column( nullable = false)
    private Double price;

    public ProductDAO (Integer id, String urlImage, String name, String description,  Double price){
        this.id = id;
        this.urlImage = urlImage;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUrlImage() {
        return urlImage;
    }

    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

}
