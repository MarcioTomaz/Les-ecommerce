package com.marcio.fatec.les_ecommerce.domain;

import lombok.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Component
public class Result {

    private List<String> msg;
    private List<DomainEntity> entities;

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
