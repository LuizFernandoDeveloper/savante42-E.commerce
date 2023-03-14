package com.savante.views.entities.model.productRequest;

public class ProductRequest {
    private String urlImage;
    private String name;
    private String description;
    private Double price;

    public ProductRequest (String urlImage, String name, String description,  Double price){
        this.urlImage = urlImage;
        this.name = name;
        this.description = description;
        this.price = price;
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
