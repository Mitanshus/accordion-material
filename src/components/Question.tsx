import {
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
	Button,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";

import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface ques {
	id: number | null | undefined | string;
	title: string;
	info: string;
}

const Question = (props: ques) => {
	const [showInfo, setShowInfo] = useState<Boolean>(false);

	const handleChange = () => {
		setShowInfo(!showInfo);
	};

	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} onChange={handleChange}>
				<Typography sx={{ width: "33%", flexShrink: 0 ,m:1,p:0.5}}>
					{props.title}
				</Typography>
			</AccordionSummary>
            <AccordionDetails>
			<Typography> {props.info}</Typography>
            </AccordionDetails>
		</Accordion>
	);
};

export default Question;
