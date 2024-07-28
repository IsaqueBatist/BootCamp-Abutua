package com.abutua.productbackend.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.abutua.productbackend.models.Category;

public class CategoryRequest {
  
  @NotBlank(message = "name can't be blank")
  @Size(min = 3, max = 255, message = "name must have between 3 and 255 characters")
  private String name;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Category toEntity() {
    return new Category(name);
  }
}
