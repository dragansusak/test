package my.test.controller;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by dragan on 16-Apr-16.
 */
@Controller
public class TestController {

    @RequestMapping(value = "/hello",method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public  String sayHallo(){
        return "Hello!";
    }
}
