import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import {Calendar, LocaleConfig} from 'react-native-calendars'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/CalendarScreenStyle'
import BigHeader from '../Components/BigHeader'
import { Colors, ApplicationStyles } from '../Themes'

class CalendarScreen extends Component {
  constructor (props) {
    super(props)

    LocaleConfig.locales['en'] = {
      monthNames: [],
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      dayNames: [],
      dayNamesShort: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
    }
    LocaleConfig.defaultLocale = 'en'

    this.state = {
      blogs: [
        {title: 'English spoken 01', date: '02/06/2019', content: 'Lorem ipsum dolor sit amet, consecletuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut'},
        {title: 'English spoken 02', date: '02/05/2019', content: 'Lorem ipsum dolor sit amet, consecletuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut'},
      ],
    }
  }

  goBack() {
    this.props.navigation.goBack()
  }

  renderCalendar() {
    return (
      <View style={[styles.calendarContainer, ApplicationStyles.shadow]}>
        <Calendar
          style={styles.calendar}
          // Initially visible month. Default = Date()
          current={'2019-05-22'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2019-06-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          markingType={'custom'}
          markedDates={
            {
              '2019-05-23': {
                selected: true,
              },
              '2019-05-09': {
                customStyles: {
                  container: {
                    backgroundColor: 'white',
                    borderColor: Colors.secondary,
                    borderWidth: 2,
                  },
                }
              },
              '2019-05-19': {
                customStyles: {
                  container: {
                    backgroundColor: 'white',
                    borderColor: Colors.secondary,
                    borderWidth: 2,
                  },
                }
              },
            }
          }
          theme={{
            backgroundColor: 'transparent',
            calendarBackground: 'transparent',
            textSectionTitleColor: '#4d4d4d',
            selectedDayBackgroundColor: Colors.secondary,
            selectedDayTextColor: Colors.text1,
            arrowColor: Colors.primaryDeactive,
            todayTextColor: Colors.text1,
            dayTextColor: '#4d4d4d',
            monthTextColor: Colors.text1,
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: 'bold',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
        />
      </View>
    );
  }

  renderBlogs() {
    return (
      <View style={styles.blogPanelContainer}>
        {
          this.state.blogs.map((blog, index) => {
            return (
              <View key={"Blog_" + index.toString()} style={[styles.blogContainer, ApplicationStyles.shadow]}>
                <View style={styles.titleRow}>
                  <Text style={styles.title}>{blog.title}</Text>
                  <Text style={styles.date}>{blog.date}</Text>
                </View>
                <Text style={styles.content}>{blog.content}</Text>
              </View>
            );
          })
        }
      </View>
    );
  }

  render () {
    return (
      <View style={styles.container}>
        <BigHeader title="Milly Groam" onClickBack={() => this.goBack()} />
        <ScrollView style={styles.bodyContainer}>
          {this.renderCalendar()}
          {this.renderBlogs()}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarScreen)
