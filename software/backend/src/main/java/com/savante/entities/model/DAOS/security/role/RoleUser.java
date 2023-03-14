package com.savante.entities.model.DAOS.security.role;

import com.savante.entities.enums.security.roleName.RoleName;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;

import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "tb_role")
public class RoleUser  implements Serializable, GrantedAuthority {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false , name = "user_id")
    private UUID userId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, unique = true, name = "role_id")
    private RoleName roleName;

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public RoleName getRoleName() {
        return roleName;
    }

    public void setRoleName(RoleName roleName) {
        this.roleName = roleName;
    }

    @Override
    public String getAuthority() {
        return this.roleName.toString();
    }
}
