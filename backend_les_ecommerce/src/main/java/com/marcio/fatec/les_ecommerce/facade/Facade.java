package com.marcio.fatec.les_ecommerce.facade;

import com.marcio.fatec.les_ecommerce.DAO.IDAO;
import com.marcio.fatec.les_ecommerce.domain.DomainEntity;
import com.marcio.fatec.les_ecommerce.domain.Result;
import com.marcio.fatec.les_ecommerce.strategy.IStrategy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class Facade extends AbstractFacade implements IFacade{

    private StringBuilder stringBuilder = new StringBuilder();
    private Result result;

    private void executeRules(DomainEntity domainEntity, List<IStrategy> rules){
        for (IStrategy rule: rules){
            String msg = rule.process(domainEntity);
            if(msg != null){
                stringBuilder.append(msg);
            }
        }
    }

    @Override
    public Result save(DomainEntity entity) {
        super.initializeMaps();
        result = new Result();
        stringBuilder.setLength(0);
        String className = entity.getClass().getName();
        Map<String, List<IStrategy>> entityMap = rules.get(className);
        List<IStrategy> entityRules = entityMap.get("SALVAR");

        executeRules(entity, entityRules);

        if(stringBuilder.length() ==0){
            IDAO dao = daos.get(className);
            dao.create(entity);
            result.addEntities(entity);
        }else{
            result.addEntities(entity);
            result.setMsg(stringBuilder.toString());
        }

        return result;
    }

    @Override
    public Result update(DomainEntity domainEntity) {
        return null;
    }

    @Override
    public Result delete(DomainEntity domainEntity) {
        return null;
    }

    @Override
    public Result list(DomainEntity domainEntity) {
        return null;
    }
}
