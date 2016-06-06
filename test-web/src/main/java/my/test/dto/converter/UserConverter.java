package my.test.dto.converter;

import my.test.dto.UserDto;
import my.test.model.entity.User;
import org.springframework.stereotype.Component;

/**
 * Created by Dragan Susak on 06-Jun-16.
 */
@Component
public class UserConverter extends BaseConverter<User,UserDto> {
}
