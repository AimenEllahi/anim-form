'use client';
import React from "react";
import { Squircle } from 'corner-smoothing';
import styled from 'styled-components';

const StyledCard = styled(Squircle)`
  display: inline-block;
  /* Overall card background color and border */
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
  padding: 1px; 
`;



export default function ImgCard({ src, name, job }) {


  return (
    <div className='flex flex-col gap-6 w-full'>
      <StyledCard cornerRadius={16} >
        <Squircle
          cornerRadius={16}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex', /* Use flex to center image */
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={src}
            alt='Images about the developers of dndai.app'
            title='Images about the developers of dndai.app'
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Squircle>
      </StyledCard>
      <div className='flex flex-col gap-3'>
        <span className='headline-4'>{name}</span>
        <span className='running-text-mono text-irisPurpleLight uppercase'>
          {job}
        </span>
      </div>
    </div>
  );
}
