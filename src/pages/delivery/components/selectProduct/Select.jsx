import React, { useState } from 'react';
import {ContentSelect} from './style'

export default function Select(){
  
  return (
    <>
        <ContentSelect>
            <option value="" disabled selected>Categorias</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </ContentSelect>
    </>
  );
};

