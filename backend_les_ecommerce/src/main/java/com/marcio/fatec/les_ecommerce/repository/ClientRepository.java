package com.marcio.fatec.les_ecommerce.repository;

import com.marcio.fatec.les_ecommerce.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    boolean existsByEmail(String email);

    List<Client> findAll();

    Optional<Client> findByEmail(String email);

    Client getById(Long id);
}