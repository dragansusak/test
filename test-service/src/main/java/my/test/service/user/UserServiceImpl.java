package my.test.service.user;

import my.test.model.entity.User;
import my.test.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by dragan on 24-Apr-16.
 */
@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User getById(int id) {
        return userRepository.findOne(id);
    }

    @Override
    public User storeUser(User user) {
        return userRepository.save(user);
    }
}
