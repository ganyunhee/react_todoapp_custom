import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.form`
  width: 33%;
  min-width: 375px;
  display: flex;
`

export const Title = styled.div`
  font-size: 50px;
  color: rgb(254, 254, 254);
  position: relative;
  padding: 70px;
`

export const TextInputWrapper = styled.div`
  position: relative;
  /*display: inline-block;*/
  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;
`

export const TextInput = styled.input`
  width: 80%;
  height: 4rem;
  padding: 1rem 2rem 1rem;
  border: none;
  border-radius: 0.7rem 0 0 0.7rem;
  background-color: rgba(0, 0, 0, 0.35);
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  color: rgba(254, 254, 254, 0.8);

  font-size: 1.2rem;

  &:focus{
    outline: none;
  }
`

export const SubmitInput = styled.button`
  width: 20%;
  height: 4rem;
  border: none;
  border-radius: 0 0.7rem 0.7rem 0;

  color: rgba(254, 254, 254, 0.35);
  /*background-color: rgba(0, 0, 0, 0);*/
  font-size: 1rem;

  background-color: rgba(0, 0, 0, 0.35);
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);

  cursor: pointer;

  position: absolute;
  right: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const UnorderedList = styled.ul`
  width: 33%;
  min-width: 375px;
  height: 10rem;
  padding: 0;

  list-style-type: none;
`
export const ListItem = styled.li`
  padding: 1.5rem;
  padding-left: 2rem;
  margin-bottom: 1rem;
  border-radius: 0.7rem;
  border: 1.5px solid rgba(254, 254, 254, 0.25);
  background-color: rgba(254, 254, 254, 0.35);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  color: rgba(0, 0, 0, 0.8);

  position: relative;
`

export const TodoText = styled.span`
  display: inline-block;
  width: 90%;
  font-size: 1.2rem;
  line-height: 1.5rem;
`
export const TodoDelete = styled.button`
  width: 10%;
  height: 1.5rem;
  border: none;
  border-radius: 0.5rem; 

  background-color: transparent;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;

  position: absolute;
  right: 0;
`