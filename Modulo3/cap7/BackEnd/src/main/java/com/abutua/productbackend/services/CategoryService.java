package com.abutua.productbackend.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.abutua.productbackend.repositories.CategoryRepository;
import com.abutua.productbackend.dto.CategoryRequest;
import com.abutua.productbackend.dto.CategoryResponse;
import com.abutua.productbackend.models.Category;

@Service
public class CategoryService {

  @Autowired
  private CategoryRepository categoryRepository;

  public CategoryResponse getDTOCategoryByID(int id) {
    Category category = categoryRepository.findById(id)
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found"));
    return category.toDTO();
  }
  
  public Category getCategoryByID(int id) {
    Category category = categoryRepository.findById(id)
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found"));
    return category;
  }

  public List<CategoryResponse> getAll() {
    return categoryRepository.findAll()
    .stream()
    .map(Category -> Category.toDTO())
    .collect(Collectors.toList());
  }

  public CategoryResponse save(CategoryRequest categoryRequest) {
    Category category = categoryRepository.save(categoryRequest.toEntity());
    return category.toDTO();
  }

  public void deleteById(int id) {
    Category category = getCategoryByID(id);
    categoryRepository.delete(category);
  }

  public void update(int id, CategoryRequest categoryUpdate) {
    Category category = getCategoryByID(id);
    category.setName(categoryUpdate.getName());
    categoryRepository.save(category);
  }
}
