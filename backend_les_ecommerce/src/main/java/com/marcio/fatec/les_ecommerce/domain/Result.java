package com.marcio.fatec.les_ecommerce.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Component
public class Result {

    private String msg;
    private List<DomainEntity> entities;

    public String getMsg(){
        return msg;
    }

    public void setMsg(String msg){
        this.msg = msg;
    }

    public List<DomainEntity> getEntities(){
        return entities;
    }

    public void setEntities(List<DomainEntity> entities){
        this.entities = entities;
    }

    public void addEntities(DomainEntity entity){
        if(entities == null){
            entities = new ArrayList<DomainEntity>();
        }
        entities.add(entity);
    }
}
