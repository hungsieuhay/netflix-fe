import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

CardInfo.propTypes = {
  cardList: PropTypes.array,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '52px 0',
    listStyleType: 'none',
  },
  list: {
    backgroundColor: '#222',
    margin: theme.spacing(2),
  },
  heading: {
    margin: '20px 32px',
    fontSize: theme.spacing(3),
    color: '#fff',
  },
  description: {
    margin: '20px 32px',

    textAlign: 'justify ',
    fontSize: theme.spacing(3),
    color: '#fff',
  },
  icon: {
    color: '#fff',
    fontSize: theme.spacing(4),
    marginRight: theme.spacing(3),
  },
}));

function CardInfo({ cardList }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ul className={classes.root}>
      {cardList.map((data) => (
        <li key={data.id}>
          <Accordion
            className={classes.list}
            expanded={expanded === `panel${data.id}`}
            onChange={handleChange(`panel${data.id}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.icon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{data.title}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ borderTop: '1px solid #000' }}>
              <Typography className={classes.description}>{data.description}</Typography>
            </AccordionDetails>
          </Accordion>
        </li>
      ))}
    </ul>
  );
}

export default CardInfo;
