package com.kisal.Security.Controller;

import com.kisal.Security.Model.User;
import com.kisal.Security.Service.JwtService;
import com.kisal.Security.Service.UserService;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.Map;

// import java.util.HashMap;
// import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user){
        log.info("Registering user: {}", user);
        if (userService.getUser(user.getUsername()) != null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(userService.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user){
        log.info("Login user: {}", user);
        if(userService.verify(user)){
            Map<String, Object> map = new HashMap<>();
            map.put("token",jwtService.generateToken(user.getUsername()));
            map.put("id",userService.getUser(user.getUsername()).getId());

            return ResponseEntity.ok(map);
            //return ResponseEntity.ok(jwtService.generateToken(user.getUsername()));
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
}
