package com.kisal.Security.Service;

import com.kisal.Security.Model.Student;
import com.kisal.Security.Repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

    public Student saveStudent(Student student){
        return studentRepo.save(student);
    }

    public List<Student> fetchStudents(){
        return studentRepo.findAll();

    }
}
