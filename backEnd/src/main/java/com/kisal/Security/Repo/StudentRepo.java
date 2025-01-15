package com.kisal.Security.Repo;

import com.kisal.Security.Model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepo extends MongoRepository<Student, String> {
    //Student saveOrUpdate(Student student);
}
