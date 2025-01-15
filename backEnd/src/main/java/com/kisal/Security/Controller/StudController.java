package com.kisal.Security.Controller;

import com.kisal.Security.Model.Student;
import com.kisal.Security.Model.User;
import com.kisal.Security.Service.StudentService;
import com.kisal.Security.Service.UserService;

//import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.*;

//import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(origins = "*")
public class StudController {

    @Autowired
    private StudentService studService;

    @Autowired
    private UserService userService;

//    private List<Student> students = new ArrayList<>(List.of(
//            new Student("1", "Kisal", "1", 22),
//            new Student("2", "Kisal2", "2", 22),
//            new Student("3", "Kisal3", "3", 22)
//
//    ));

//    @PostMapping("/addStud")
//    public ResponseEntity<?> addStudent(@RequestBody Student student){
//        return ResponseEntity.ok(students.add(student));
//
//    }
//
//    @GetMapping("/getStuds")
//    public ResponseEntity<List<Student>> getStudents(){
//        return ResponseEntity.ok(students);
//    }

    @PutMapping("/{id}/addStud")
    public ResponseEntity<Student> addStudent(@RequestBody Student stud , @PathVariable String id){
        
        Student student = studService.saveStudent(stud); 

        User user = userService.getUserById(id);
        user.setStudent(stud);
        //user.setId(userService.getUser(username).getId());
        userService.register(user);
       
        return ResponseEntity.ok(student);
        
    }

    @GetMapping("/getStuds")
    public ResponseEntity<List<Student>> getStudents(){
        return ResponseEntity.ok(studService.fetchStudents());
    }

    //getting token

    // @GetMapping("/token")
    // public CsrfToken getToken(HttpServletRequest req){
    //     return (CsrfToken) req.getAttribute("_csrf");
    //}

}
