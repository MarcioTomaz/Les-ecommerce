package com.marcio.fatec.les_ecommerce.DAO;

import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientDAO implements IDAO{

    @Autowired
    ClientRepository clientRepository;

    @Override
    public DomainEntity create(DomainEntity domainEntity) {

        Client client = (Client) domainEntity;

        clientRepository.save(client);

        return client;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public void update(DomainEntity domainEntity) {

//        Pessoa  pessoa = (Pessoa) entidade;
//        Usuario usuario = usuarioRepository.findUsuarioById(pessoa.getUsuario().getId());
//        pessoa.getUsuario().setPassword(usuario.getPassword());
//        pessoa.getUsuario().setTipoUsuario(usuario.getTipoUsuario());
//        pessoa.getUsuario().setStatus(usuario.getStatus());
//        for (Telefone telefone : pessoa.getTelefones()) {
//            telefone.setPessoa(pessoa);
//        }
//        pessoa = pessoaRepository.save(pessoa);
//        pessoa.getUsuario().setPassword(null);
        Client client = ( Client ) domainEntity;

        client = clientRepository.save(client);

    }

    @Override
    public List<DomainEntity> list(DomainEntity domainEntity) {
        return null;
    }
}
