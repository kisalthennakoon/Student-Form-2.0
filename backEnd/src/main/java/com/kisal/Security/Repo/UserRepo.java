package com.kisal.Security.Repo;


import com.kisal.Security.Model.User;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

@Repository
public interface UserRepo extends MongoRepository<User, String> {
    User findByUsername(String username);
    //User saveOrUpdate(User user);
}
