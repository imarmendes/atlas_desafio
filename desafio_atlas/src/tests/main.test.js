/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Main from "../pages/Main";
import customRender from "./costomRender";

describe('Testando a tela inicial de buscas.', () => {
  
  it('Testa se os elementos estão na tela.', () => {
    customRender(<Main />, '/')
    const inicialText = screen.getByText('Buscar usuário no GitHub')
    const pesquisarBtn = screen.getByRole('button', { name: /pesquisar/i })
    const inputText = screen.getByRole('textbox')

    expect(inicialText).toBeInTheDocument();
    expect(pesquisarBtn).toBeInTheDocument();
    expect(inputText).toBeInTheDocument();
  })

  it('Testa casos de entradas invalidas.', () => {
    customRender(<Main />, '/')
    const pesquisarBtn = screen.getByRole('button', { name: /pesquisar/i })
    const inputText = screen.getByRole('textbox')

    userEvent.click(pesquisarBtn)

    const emptyInput = screen.getByText(/informe um nome de usuário válido do github/i)

    expect(emptyInput).toBeInTheDocument();

    userEvent.type(inputText, 'usuário_que_não_existe');    

    userEvent.click(pesquisarBtn)

    // const notFoundUser = screen.getByText(  /usuário não encontrado no github\. verifique se você digitou o nome corretamente/i  )

    // expect(notFoundUser).toBeInTheDocument();
  })

  it('Testa transição de tela, caso de sucesso.', async () => {
    customRender(<Main />, '/')
    const pesquisarBtn = screen.getByRole('button', { name: /pesquisar/i })
    // const inputText = screen.getByRole('textbox')

    // userEvent.type(inputText, 'imarmendes');    
    fireEvent.change(screen.getByRole('textbox'), {target: {value: "imarmendes"}})
    userEvent.tab()
    userEvent.click(pesquisarBtn)


    // const notFoundUser = screen.getByText(  /usuário não encontrado no github\. verifique se você digitou o nome corretamente/i  )

    // expect(notFoundUser).toBeInTheDocument();
  }) 
})