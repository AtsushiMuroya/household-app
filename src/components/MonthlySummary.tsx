import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const MonthlySummary = () => {
  return (
    <Grid container>
      <Grid item>
        <Card>
          <CardContent>
            <Stack>
              <ArrowUpwardIcon />
              <Typography>収入</Typography>
            </Stack>
            <Typography>¥300</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Stack>
              <ArrowDownwardIcon />
              <Typography>支出</Typography>
            </Stack>
            <Typography>¥300</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Stack>
              <AccountBalanceIcon />
              <Typography>合計</Typography>
            </Stack>
            <Typography>¥300</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default MonthlySummary;