package com.marcio.fatec.les_ecommerce.controller;

import com.marcio.fatec.les_ecommerce.DTO.CouponCheckDTO;
import com.marcio.fatec.les_ecommerce.DTO.CouponDTO;
import com.marcio.fatec.les_ecommerce.DTO.CreditCardDTO;
import com.marcio.fatec.les_ecommerce.DTO.ExchangeCouponCheckDTO;
import com.marcio.fatec.les_ecommerce.domain.*;
import com.marcio.fatec.les_ecommerce.facade.Facade;
import com.marcio.fatec.les_ecommerce.repository.CouponRepository;
import com.marcio.fatec.les_ecommerce.repository.CreditCardRepository;
import com.marcio.fatec.les_ecommerce.repository.ExchangeCouponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/coupons")
public class CouponController {

    @Autowired
    CouponRepository couponRepository;
    @Autowired
    ExchangeCouponRepository exchangeCouponRepository;

    @PostMapping
    public ResponseEntity save(@RequestBody CouponDTO couponDTO){

//        CreditCard creditCard = new CreditCard(creditCardDTO);
//
//        result = facade.save(creditCard);

        Coupon coupon = new Coupon(couponDTO);

        couponRepository.save(coupon);

        return ResponseEntity.ok().body("Salvo com sucesso");
    }

    @GetMapping("/cupons")
    public ResponseEntity getAllCoupons(){
        Coupon coupon = new Coupon();

        List<Coupon> couponList = new ArrayList<>();

        couponList = couponRepository.findByDeletedFalse();

        return ResponseEntity.ok().body(couponList);
    }

    @PostMapping("/verificarCupom")
    public ResponseEntity getCoupon(@RequestBody CouponCheckDTO couponCheckDTO){

        try {
            Coupon result = new Coupon();

            if( !couponCheckDTO.getCode().isEmpty()) {

                result = couponRepository.findByCode(couponCheckDTO.getCode());

                if(result == null ){
                    return ResponseEntity.notFound().build();
                }else {

                    return ResponseEntity.ok().body(result);
                }

            }else{
                return ResponseEntity.notFound().build();
            }

        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false);
        }
    }

    @GetMapping("/cuponsTroca")
    public ResponseEntity getAllExchangeCoupon(@Param("id") Long id){

        List<ExchangeCoupon> result = exchangeCouponRepository.findAllExchangeCouponByClientIdAndDeletedFalse(id);

        return ResponseEntity.ok().body(result);
    }

    @PostMapping("/verificarCupomTroca")
    public ResponseEntity getExchangeCoupon(@RequestBody ExchangeCouponCheckDTO exchangeCouponCheckDTO){

        try {
            ExchangeCoupon result = new ExchangeCoupon();

            if( !exchangeCouponCheckDTO.getExchangeCode().isEmpty()) {

                result = exchangeCouponRepository.findByCode(exchangeCouponCheckDTO.getExchangeCode());

                if(result == null ){
                    return ResponseEntity.notFound().build();
                }else {

                    return ResponseEntity.ok().body(result);
                }

            }else{
                return ResponseEntity.notFound().build();
            }

        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false);
        }
    }

    @DeleteMapping("/deletar")
    public ResponseEntity delete(@Param("id") Long id){

        try {
            Coupon coupon = new Coupon();
            coupon.setId(id);

            couponRepository.delete(coupon);

            return ResponseEntity.ok().body("result");

        }catch (Exception e){
            return ResponseEntity.ok().body(e.getMessage());
        }
    }
}
