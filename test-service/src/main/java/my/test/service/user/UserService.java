package my.test.service.user;

import my.test.model.entity.User;

import java.util.List;

/**
 * Created by dragan on 24-Apr-16.
 */
public interface UserService {

    List<User> getAll();

    User getById(int id);

    User storeUser(User user);
}
