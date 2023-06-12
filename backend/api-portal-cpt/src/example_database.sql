-- Criação do banco de dados
CREATE DATABASE apiportal;
USE apiportal;

-- Criação da tabela de cursos
CREATE TABLE tb_courses (
    `id` INT  AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `carga_horaria` INT NOT NULL,    
    `img` VARCHAR(100) NOT NULL,
    `status` BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);