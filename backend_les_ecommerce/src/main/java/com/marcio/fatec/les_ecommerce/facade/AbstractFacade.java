package com.marcio.fatec.les_ecommerce.facade;

import com.marcio.fatec.les_ecommerce.DAO.AddressDAO;
import com.marcio.fatec.les_ecommerce.DAO.ClientDAO;
import com.marcio.fatec.les_ecommerce.DAO.CreditCardDAO;
import com.marcio.fatec.les_ecommerce.DAO.IDAO;
import com.marcio.fatec.les_ecommerce.domain.Address;
import com.marcio.fatec.les_ecommerce.domain.Client;
import com.marcio.fatec.les_ecommerce.domain.CreditCard;
import com.marcio.fatec.les_ecommerce.strategy.IStrategy;
import com.marcio.fatec.les_ecommerce.strategy.client.EncryptPassword;
import com.marcio.fatec.les_ecommerce.strategy.client.validate.*;
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

    public static final String SALVAR = "SALVAR";

    public static final String EDITAR = "EDITAR";

    public static final String EXCLUIR = "EXCLUIR";

    public static final String PESQUISAR = "PESQUISAR";


    //DAOS
    @Autowired
    ClientDAO clientDAO;

    @Autowired
    AddressDAO addressDAO;

    @Autowired
    CreditCardDAO creditCardDAO;

    ///
    @Autowired
    ValidateExistingEmail validateExistingEmail;

    @Autowired
    ValidateCPF validateCPF;

    @Autowired
    ValidatePasswordNull validatePasswordNull;

    @Autowired
    ValidatePasswordNumberCaracter validatePasswordNumberCaracter;

    @Autowired
    ValidatePasswordEquals validatePasswordEquals;

    @Autowired
    ValidateTypePhone validateTypePhone;

    @Autowired
    ValidateBirthDate validateBirthDate;

    @Autowired
    Validate validate;

    @Autowired
    EncryptPassword passowrd;

    protected void initializeMaps(){
        daos.put(Client.class.getName(), clientDAO);
        daos.put(Address.class.getName(), addressDAO);
        daos.put(CreditCard.class.getName(), creditCardDAO);

        //***************************** CLIENT *****************************
        List<IStrategy> saveClient = new ArrayList<>();

//        saveClient.add(validate);
        saveClient.add(validateExistingEmail);
        saveClient.add(validateCPF);
        saveClient.add(validatePasswordNull);
        saveClient.add(validatePasswordNumberCaracter);
        saveClient.add(validatePasswordEquals);
        saveClient.add(validateBirthDate);
        saveClient.add(validateTypePhone);
        saveClient.add(passowrd);

        List<IStrategy> editClient = new ArrayList<>();

        Map<String, List<IStrategy>> clientRules = new HashMap<>();
        clientRules.put(SALVAR, saveClient);
        clientRules.put(EDITAR, editClient);

        this.rules.put(Client.class.getName(), clientRules);

        //***************************** ADDRESS *****************************

        List<IStrategy> saveAddress = new ArrayList<>();
//        saveAddress.add()

        Map<String, List<IStrategy>> addressRules = new HashMap<>();

        addressRules.put(SALVAR, saveAddress);

        this.rules.put(Address.class.getName(), addressRules);



        //***************************** CREDIT CARD *****************************
        List<IStrategy> saveCreditCards = new ArrayList<>();

//        saveCreditCards.add()
        Map<String, List<IStrategy>> creditCardRules = new HashMap<>();
        creditCardRules.put(SALVAR, saveCreditCards);

        this.rules.put(CreditCard.class.getName(), creditCardRules );
    }



}
