package com.example;

    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.boot.SpringApplication;
    import org.springframework.boot.autoconfigure.SpringBootApplication;
    import org.springframework.stereotype.Controller;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.ResponseBody;

    import com.services.UserService;
    import com.services.domain.User;

    @Controller
    @SpringBootApplication (scanBasePackages={"com.services"})
    public class DemoApplication {
 
        @Autowired
        private UserService userService;
 
        @RequestMapping("/")
        @ResponseBody
        String home() { 
            User user = null;
            return "Hello " + userService.getUsername(user) + ". How are you?";
        }

        public static void main(String[] args) {
            SpringApplication.run(DemoApplication.class, args);
        }
    }