/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { screen } from "@testing-library/react";
import Report from "../pages/Report";
import customRender from "./costomRender";

describe('Testando a tela que exibe o perfio.', () => {
  it('Testa se tela report exibe o perfio adequadamente.', async () => {
    customRender(<Report />, '/report')
    const name = screen.getByText(/francisco imar mendes/i)
    const link = screen.getByRole('link', {  name: /@imarmendes/i})
    const followers = screen.getByText(/30 followers/i)
    const following = screen.getByText(/20 following/i)
    
    expect(name).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(followers).toBeInTheDocument();
    expect(following).toBeInTheDocument();

  })

  it('Testa se tela report exibe os repositórios adequadamente.', async () => {
    customRender(<Report />, '/report')
    const repositories = screen.getByText(/repositories 2/i)
    const linkrepoAtlas_desafio = screen.getByRole('link', {  name: /atlas_desafio/i})
    const language = screen.getByText(/javaScript/i)
    const linkrepoDevicon = screen.getByRole('link', {  name: /devicon/i})
    
    expect(repositories).toBeInTheDocument();
    expect(linkrepoAtlas_desafio).toBeInTheDocument();
    expect(language).toBeInTheDocument();
    expect(linkrepoDevicon).toBeInTheDocument();

  })
})