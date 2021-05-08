﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentApi.Models
{
    public class PaymentDetail
    {
        [Key]
        public int Id { get; set; }
      
        [Column(TypeName = ("nvarchar(100)"))]
        public string CardOwnerName { get; set; }
      
        [Column(TypeName = ("nvarchar(100)"))]
        public string CardNumber { get; set; }
       
        [Column(TypeName = ("nvarchar(100)"))]
        public string ExpirationDate { get; set; }
     
        [Column(TypeName = ("nvarchar(100)"))]
        public int CCV { get; set; }
    }
}