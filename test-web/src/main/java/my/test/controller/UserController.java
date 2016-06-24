package my.test.controller;

import my.test.dto.UserDto;
import my.test.dto.converter.UserConverter;
import my.test.model.entity.User;
import my.test.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.time.Period;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Dragan Susak on 06-Jun-16.
 */
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserConverter userConverter;

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<UserDto>> getAllUsers() throws Exception {
        HttpHeaders headers = new HttpHeaders();
        ResponseEntity<List<UserDto>> ent = new ResponseEntity<>(
                userService.getAll().stream().map(user -> userConverter.convertToDto(user)).collect(Collectors.toList()),headers, HttpStatus.OK);

        return ent;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDto> getUser(@PathVariable final int id) {
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<>(userConverter.convertToDto(userService.getById(id)), headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
    public ResponseEntity<Void> deleteUser(@PathVariable final int id) {
        userService.deleteUser(id);
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<>(headers,HttpStatus.OK);
    }

    @RequestMapping(value = "/new", method = RequestMethod.POST)
    public ResponseEntity<Void> storeUser(@RequestBody @Valid UserDto user, BindingResult bindingResult) {
        HttpHeaders headers = new HttpHeaders();
        user.setPassword("password");
        user.setSalt("salt");
        user.setValidFrom(LocalDateTime.now());
        user.setValidTo(user.getValidFrom().plus(Period.of(3,0,0)));
        User savedUser = userService.storeUser(userConverter.convertToModel(user));
        if (savedUser != null)
            headers.add("UserId", savedUser.getId() + "");
        return new ResponseEntity<>(headers, HttpStatus.OK);
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public void handleErrors(Exception exception) {
        exception.printStackTrace();
    }
}
