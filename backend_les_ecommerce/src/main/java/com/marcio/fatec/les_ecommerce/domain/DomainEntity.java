package com.marcio.fatec.les_ecommerce.domain;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;


@Getter
@Setter
@AllArgsConstructor
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@MappedSuperclass
public abstract class DomainEntity extends Result implements Serializable {

    @Id
    @GeneratedValue ( strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "deleted", nullable = false)
    private boolean deleted = false;

//    @Column(name = "creation_date", nullable = false)
////    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "dd-MM-yyyy")
//    private LocalDateTime creationDate = LocalDateTime.now();

    @Column(name = "deleted_date")
    private LocalDateTime deletedDate;

    @Column(name = "updatedDate")
    private LocalDateTime updatedDate;

//    public DomainEntity() {
//        this.creationDate = LocalDateTime.now();
//    }
}
