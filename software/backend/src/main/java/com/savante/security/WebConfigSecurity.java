/*Mapeio Url, endereços, autoriza ou bloqueia acessos a URL*/
package com.savante.security;


import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;

@Configuration
@EnableWebSecurity
public class WebConfigSecurity extends WebSecurityConfiguration {
    
}
