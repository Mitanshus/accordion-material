import { useState } from "react";
import data from "./components/Data";
import SingleQuestion from "./components/Question";
import "./App.css";
import Paper from "@mui/material/Paper";
import { Box, Container, Grid, Typography } from "@mui/material";

function App() {
	interface questi {
		questio: { id: string; title: string; info: string }[];
	}
	const [questions, setQuestion] = useState<any[]>(data);
	return (
		<Grid
			container
			sx={{ display: "flex", justifyContent: "center", alignItems: "center" ,marginTop:'25vh'}}
		>
			<Paper elevation={10} 
				sx={{ display: "flex", justifyContent: "center", alignItems: "center",m:1,p:2 }}
			>
				<Container sx={{ display: "flex" }}>
					<Grid
						xs={4}
						xl={4}
						sx={{ display: "grid", p: 2, m: 2, width: "90vw" }}
					>
						<Typography variant="h2">Question and answers about login</Typography>
					</Grid>
					<Grid xs={8} xl={8} className='info'>
						{questions.map((question) => {
							return (
								<SingleQuestion
									id={question.id}
									title={question.title}
									info={question.info}
									key={question.id}
									{...questions}
								></SingleQuestion>
							);
						})}
					</Grid>
				</Container>
			</Paper>
		</Grid>
	);
}

export default App;
