package com.abutua.productbackend.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.abutua.productbackend.dto.CategoryRequest;
import com.abutua.productbackend.dto.CategoryResponse;
import com.abutua.productbackend.services.CategoryService;

@RestController
@CrossOrigin
@RequestMapping("categories")
public class CategoryController {


    @Autowired
    private CategoryService categoryService;
    //DTO - Data Transfer Object
    @GetMapping("{id}")
    public ResponseEntity<CategoryResponse> getCategory(@PathVariable int id) {
        CategoryResponse category = categoryService.getDTOCategoryByID(id);
        return ResponseEntity.ok(category);
    }
    //DTO - Data Transfer Object
    @GetMapping
    public ResponseEntity<List<CategoryResponse>> getCategories() {
        return ResponseEntity.ok(categoryService.getAll());
    }
    
    //DTO - Data Transfer Object
    @PostMapping
    public ResponseEntity<CategoryResponse> save(@Validated @RequestBody CategoryRequest categoryRequest) {
        CategoryResponse category = categoryService.save(categoryRequest);

        URI location = ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(category.getId())
            .toUri();

        return ResponseEntity.created(location).body(category);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> removeCategory(@PathVariable int id) {
        categoryService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    
    //DTO - Data Transfer Object
    @PutMapping("{id}")
    public ResponseEntity<Void> updateCategory(@PathVariable int id, @RequestBody CategoryRequest category) {
        categoryService.update(id, category);
        return ResponseEntity.ok().build();
    }



}
