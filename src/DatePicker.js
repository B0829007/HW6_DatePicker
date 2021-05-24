import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(0),
    width: 170
  },
  textField2: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    width: 50
  }
}));

function TaiwanDate(date) {
    const [year, month, day] = date.split('-')
    return `民國${year - 1911}年-${month}月-${day}號`
}

export default function DatePickers() {
  const classes = useStyles();
  const [myDate, setMydate] = useState("民國110年-05月-24號")

  return (
    <form className={classes.container} noValidate>
      <TextField value={myDate}
        id="basic"
        label="阿公店開店日選擇"
        className={classes.textField}
        />
      <TextField
        id="date"
        label=" "
        type="date"
        className={classes.textField2}
        onChange={event => {
            setMydate(TaiwanDate(event.target.value))
        }}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}