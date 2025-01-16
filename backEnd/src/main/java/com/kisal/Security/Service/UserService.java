package com.kisal.Security.Service;

import com.kisal.Security.Model.User;
import com.kisal.Security.Repo.UserRepo;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    @Autowired
    AuthenticationManager authManager;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    public User register(User user){
        user.setPassword(encoder.encode(user.getPassword()));
        return repo.save(user);
        
    }

    public Boolean verify(User user){
        log.info("Verifying user: {}", user);
        Authentication authentication = authManager.authenticate(
                
                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
        );
        log.info("User verified: {}", authentication.isAuthenticated());
        return authentication.isAuthenticated();

    }

    public User getUserById(String id){
        return repo.findById(id).get();
    }
    
    public User getUser(String username){
        return repo.findByUsername(username);
    }
}
