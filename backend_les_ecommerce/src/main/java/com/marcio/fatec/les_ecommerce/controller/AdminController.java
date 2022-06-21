package com.marcio.fatec.les_ecommerce.controller;

import com.marcio.fatec.les_ecommerce.DTO.DashBoardDateDTO;
import com.marcio.fatec.les_ecommerce.DTO.DashboardDTO;
import com.marcio.fatec.les_ecommerce.DTO.FilterDTO;
import com.marcio.fatec.les_ecommerce.domain.Product;
import com.marcio.fatec.les_ecommerce.repository.DashboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Tuple;
import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/adm")
public class AdminController {

    @Autowired
    DashboardRepository dashboardRepository;
    
    @PostMapping("/dashboardFilter")
    public ResponseEntity getDashboardFilter(@RequestBody FilterDTO filterDTO){

        List<Tuple> result = dashboardRepository.findDashboard(filterDTO.getDtInicio(), filterDTO.getDtFim());
        List<DashboardDTO> dashBoardDTO = result.stream()
                .map(t -> {

                    DashboardDTO dashBoardDTO1 = new DashboardDTO();
                    BigDecimal cardsQuantity = t.get("quantity", BigDecimal.class);
                    dashBoardDTO1.setCardsQuantity(cardsQuantity.intValue());
                    dashBoardDTO1.setCardName(t.get( "name", String.class));
                    dashBoardDTO1.setCardRarity(t.get( "cardRarity", String.class ));
                    dashBoardDTO1.setCardType(t.get( "cardType", String.class ));
                    dashBoardDTO1.setOrderDate(t.get("orderDate", String.class));
                    return dashBoardDTO1;

                })
                .collect(Collectors.toList());

        return ResponseEntity.ok().body(dashBoardDTO);
    }
}
