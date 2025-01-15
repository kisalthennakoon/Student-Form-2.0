// package com.kisal.Security.Seeds;

// import com.kisal.Security.Model.User;

// import com.kisal.Security.Service.UserService;
// import jakarta.annotation.PostConstruct;
// import lombok.extern.slf4j.Slf4j;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Component;

// @Slf4j
// @Component
// public class Seeds {

//     @Autowired
//     private UserService userService;

//     @PostConstruct
//     public void PlantSeeds() {

//         User user1 = new User("1","user1", "123");
//         User user2 = new User("2","user2", "123");
//         User user3 = new User("3","user3", "123");
//         User user4 = new User("4","user4", "123");
//         User user5 = new User("5","user5", "123");

//         userService.register(user1);
//         userService.register(user2);
//         userService.register(user3);
//         userService.register(user4);
//         userService.register(user5);

//         log.info("Seeds planted");


//     }

// }
