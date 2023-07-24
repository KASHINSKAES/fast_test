
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import  Column, Integer, String
from config import DB_HOST,DB_NAME,DB_PASS,DB_PORT,DB_USER
 
from fastapi import FastAPI
 
SQLALCHEMY_DATABASE_URL = (
    f"postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}:5432/{DB_NAME}"
)
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
 
 
Base = declarative_base()
class student(Base):
    __tablename__ = "student"
 
    id = Column("id",Integer,primary_key=True),
    familia=Column("familia",String),
    imia=Column("imia",String),
    otchestvo=Column("otchestvo",String)
 
SessionLocal = sessionmaker(autoflush=False, bind=engine)