import React from "react"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"
import { Link } from "gatsby"

interface BurgerProps {
  burger: Burger
}

const BurgerItem = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  width: 100%;
  .head {
    border-bottom: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
    display: flex;
    flex-flow: row wrap;
    font-size: 10px;
    justify-content: space-between;
    p {
      font-size: 1.8em;
      &:first-child {
        background: ${({ theme }) => theme.colors.illustrations.highlight};
        padding: 0.1em;
        box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
      }
    }
  }

  .ingredients {
    display: flex;
    flex-flow: column wrap;
    font-size: 10px;
    padding: 1em;
    p {
      font-size: 2em;
    }
    .ingredients-wrapper {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      span {
        border-bottom: 2px solid #333;
        font-size: 1.45em;
      }
    }
  }
`

const Burger: React.FC<BurgerProps> = ({ burger }) => {
  return (
    <BurgerItem>
      <GatsbyImage fluid={burger.image.fluid} alt={`burger-${burger.slug}`} />
      <Link to={`/burger/${burger.slug}`}>
        <div className="head">
          <p>{burger.name}</p>
          <p>{burger.price}$</p>
        </div>
      </Link>

      <div className="ingredients">
        <p>Main ingredients</p>
        <div className="ingredients-wrapper">
          {burger.ingredients?.ingredients.map(ingredient => (
            <span key={ingredient}>{ingredient}</span>
          ))}
        </div>
      </div>
    </BurgerItem>
  )
}
export default Burger
