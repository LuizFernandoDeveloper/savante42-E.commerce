package com.savante.repository.userRepository;

import com.savante.entities.model.DAOS.security.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository  extends JpaRepository<User, UUID> {
    Optional<User> findByUserName(String userName);
}
