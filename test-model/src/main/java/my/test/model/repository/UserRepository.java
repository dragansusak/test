package my.test.model.repository;

import my.test.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by dragan on 24-Apr-16.
 */
@Repository
public interface UserRepository extends JpaRepository<User,Integer>{
}
