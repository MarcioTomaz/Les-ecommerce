package com.marcio.fatec.les_ecommerce.facade;

import com.marcio.fatec.les_ecommerce.DAO.ClientDAO;
import com.marcio.fatec.les_ecommerce.DAO.IDAO;
import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.strategy.IStrategy;
import com.marcio.fatec.les_ecommerce.strategy.client.TestValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public abstract class AbstractFacade {

    protected Map<String, IDAO> daos = new HashMap<>();

    protected Map<String, Map<String, List<IStrategy>>> rules = new HashMap<>();

    @Autowired
    ClientDAO clientDAO;

    @Autowired
    TestValidation testValidation;

    protected void initializeMaps(){
        daos.put(Client.class.getName(), clientDAO);

        List<IStrategy> clientSave = new ArrayList<>();

        clientSave.add(testValidation);

        Map<String, List<IStrategy>> readerMap = new HashMap<>();
        readerMap.put("SALVAR", clientSave);

        this.rules.put(Client.class.getName(), readerMap);
    }



}
