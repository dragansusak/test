package my.test.controller;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by dragan on 16-Apr-16.
 */
@RequestMapping(value="home/*")
@Controller
public class IndexController {



    @RequestMapping(value = "/userDetails", method = RequestMethod.GET)
    public  String getUserDetails(){
        return "userDetails.html";
    }

    @RequestMapping(value="/bla", method = RequestMethod.GET)
    public  String getIndex(){
        return "index.html";
    }
}
