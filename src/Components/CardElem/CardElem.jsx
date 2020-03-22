import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { 
	Card,
	CardHeader,
	CardActions,
	CardContent,
	Button,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
		// minWidth: 175,
		textDecoration: 'none',
		margin: theme.spacing(1),
	},
	link: {
		textDecoration: 'none'
	},
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
		fontSize: 23,
		// color: 'blue'
  },
  pos: {
    marginBottom: 12,
	},
	badge: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const CardElem = ({
	title,
	subtitle,
	children
}) => {
	const classes = useStyles();
	return (
		<Card
			className={classes.card}
			elevation={3}
		>
			<CardHeader
				// action={
				// 	<IconButton
				// 		aria-label="settings"
				// 		onClick={() => {
				// 			// deleteRoom(room._id)
				// 		}}
				// 	>
				// 		<CloseIcon />
				// 	</IconButton>
				// }
				title={<div className={classes.title}>{title}</div>}
				subheader={subtitle}
			/>
			<CardContent>
				{children}
			</CardContent>
			<CardActions>
				{/* <Button size="small" to='/page1'>Learn More</Button> */}
			</CardActions>
		</Card>
	);
};

export default CardElem;
