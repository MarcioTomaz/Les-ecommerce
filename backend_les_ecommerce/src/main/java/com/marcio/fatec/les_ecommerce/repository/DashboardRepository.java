package com.marcio.fatec.les_ecommerce.repository;

import com.marcio.fatec.les_ecommerce.DTO.DashboardDTO;
import com.marcio.fatec.les_ecommerce.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.Tuple;
import java.util.List;

@Repository
public interface DashboardRepository extends JpaRepository<Product, Long> {

//    @Query(value =
//       "SELECT  " +
//               "    `name` as cardName,  " +
//               "     sum(quantity) as  cardsQuantity,  " +
//               "     card_rarity as cardRarity,  " +
//               "     card_type as cardType,  " +
//               "     DATE_FORMAT(order1.creation_date,'%d/%m/%Y') AS orderDate  " +
//               "             FROM _item_order as order1  " +
//               "                  JOIN  " +
//               "                       _product as product  " +
//               "                           WHERE order1.product_id = product.id " +
//               "                                AND " +
//               "                                    order1.creation_date > :dtInicio " +
//               "                                        AND order1.creation_date < :dtFim " +
//               "                                            GROUP BY `name`, quantity, card_rarity, card_type, order1.creation_date;", nativeQuery = true)
//    List<Tuple> findDashboard(@Param("dtInicio") String dtInicio, @Param("dtFim") String dtFim);
        @Query(value =
                "    SELECT\n" +
                    "    sum(order1.quantity) as quantity,\n" +
                    "    prod1.`name` as `name`,\n" +
                    "    prod1.card_rarity as cardRarity,\n" +
                    "    prod1.card_type as cardType,\n" +
                    "    DATE_FORMAT(order1.creation_date,'%d/%m/%Y') AS orderDate\n" +
                "    FROM\n" +
                        "    _item_order order1 LEFT JOIN\n" +
                        "    _product prod1\n" +
                "    ON prod1.id = order1.product_id\n " +
                        " AND " +
                        "       order1.creation_date > :dtInicio" +
                        "  AND order1.creation_date < :dtFim  " +
                "    group by order1.product_id, order1.creation_date\n" +
                        " order by order1.creation_date " +
                "    ;", nativeQuery = true)
        List<Tuple> findDashboard(@Param("dtInicio") String dtInicio, @Param("dtFim") String dtFim);



}
